import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Color } from 'three';

// import countries from '../../data/globe.json'
import countries from '../../data/globemini.json'

const RING_PROPAGATION_SPEED = 3;

let numbersOfRings = [0];

export default function Globe({ globeConfig, data }) {
    const [globeData, setGlobeData] = useState(null);
    const globeRef = useRef(null);

    const defaultProps = useMemo(() => ({
        pointSize: 1,
        atmosphereColor: '#ffffff',
        showAtmosphere: true,
        atmosphereAltitude: 0.1,
        polygonColor: 'rgba(255,255,255,0.7)',
        globeColor: '#1d072e',
        emissive: '#000000',
        emissiveIntensity: 0.1,
        shininess: 0.9,
        arcTime: 2000,
        arcLength: 0.9,
        rings: 1,
        maxRings: 3,
        ...globeConfig,
    }), [globeConfig]);

    useEffect(() => {
        if (globeRef.current) {
            _buildData();
            _buildMaterial();
        }
    }, [globeRef.current]);

    const _buildMaterial = useCallback(() => {
        if (!globeRef.current) return;

        const globeMaterial = globeRef.current.globeMaterial();
        globeMaterial.color = new Color(globeConfig.globeColor);
        globeMaterial.emissive = new Color(globeConfig.emissive);
        globeMaterial.emissiveIntensity = globeConfig.emissiveIntensity || 0.1;
        globeMaterial.shininess = globeConfig.shininess || 0.9;
    }, [globeConfig]);

    const _buildData = useCallback(() => {
        const arcs = data;
        let points = [];
        for (let i = 0; i < arcs.length; i++) {
            const arc = arcs[i];
            const rgb = hexToRgb(arc.color);
            points.push({
                size: defaultProps.pointSize,
                order: arc.order,
                color: (t) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
                lat: arc.startLat,
                lng: arc.startLng,
            });
            points.push({
                size: defaultProps.pointSize,
                order: arc.order,
                color: (t) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
                lat: arc.endLat,
                lng: arc.endLng,
            });
        }

        const filteredPoints = points.filter(
            (v, i, a) =>
                a.findIndex(
                    (v2) => v2.lat === v.lat && v2.lng === v.lng
                ) === i
        );

        setGlobeData(filteredPoints);
    }, [data, defaultProps]);

    useEffect(() => {
        if (globeRef.current && globeData && countries) {
            globeRef.current
                .hexPolygonsData(countries.features)
                .hexPolygonResolution(3)
                .hexPolygonMargin(0.7)
                .showAtmosphere(defaultProps.showAtmosphere)
                .atmosphereColor(defaultProps.atmosphereColor)
                .atmosphereAltitude(defaultProps.atmosphereAltitude)
                .hexPolygonColor(() => defaultProps.polygonColor);
            startAnimation();
        }
    }, [globeData]);

    const startAnimation = () => {
        if (!globeRef.current || !globeData) return;

        globeRef.current
            .arcsData(data)
            .arcStartLat((d) => d.startLat * 1)
            .arcStartLng((d) => d.startLng * 1)
            .arcEndLat((d) => d.endLat * 1)
            .arcEndLng((d) => d.endLng * 1)
            .arcColor((e) => e.color)
            .arcAltitude((e) => e.arcAlt * 1)
            .arcStroke(() => {
                return [0.32, 0.28, 0.3][Math.round(Math.random() * 2)];
            })
            .arcDashLength(defaultProps.arcLength)
            .arcDashInitialGap((e) => e.order * 1)
            .arcDashGap(15)
            .arcDashAnimateTime(() => defaultProps.arcTime);

        globeRef.current
            .pointsData(data)
            .pointColor((e) => e.color)
            .pointsMerge(true)
            .pointAltitude(0.0)
            .pointRadius(2);

        globeRef.current
            .ringsData([])
            .ringColor((e) => (t) => e.color(t))
            .ringMaxRadius(defaultProps.maxRings)
            .ringPropagationSpeed(RING_PROPAGATION_SPEED)
            .ringRepeatPeriod(
                (defaultProps.arcTime * defaultProps.arcLength) / defaultProps.rings
            );
    };

    useEffect(() => {
        if (!globeRef.current || !globeData) return;

        const interval = setInterval(() => {
            if (!globeRef.current || !globeData) return;
            numbersOfRings = genRandomNumbers(
                0,
                data.length,
                Math.floor((data.length * 4) / 5)
            );

            globeRef.current.ringsData(
                globeData.filter((d, i) => numbersOfRings.includes(i))
            );
        }, 2000);

        return () => {
            clearInterval(interval);
        };
    }, [globeRef.current, globeData]);

    return (
        <>
                <threeGlobe ref={globeRef} />
        </>
    );
}

function hexToRgb(hex) {
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
        return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
        }
        : null;
}

function genRandomNumbers(min, max, count) {
    const arr = [];
    while (arr.length < count) {
        const r = Math.floor(Math.random() * (max - min)) + min;
        if (arr.indexOf(r) === -1) arr.push(r);
    }

    return arr;
}
