import { Suspense, useMemo, useRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line } from "@react-three/drei";
import * as THREE from "three";
//#region src/components/three/ConstellationOrb.tsx
function fibonacciSphere(n, radius) {
	const pts = [];
	const ga = Math.PI * (3 - Math.sqrt(5));
	for (let i = 0; i < n; i++) {
		const y = 1 - i / (n - 1) * 2;
		const r = Math.sqrt(1 - y * y);
		const theta = ga * i;
		pts.push(new THREE.Vector3(Math.cos(theta) * r * radius, y * radius, Math.sin(theta) * r * radius));
	}
	return pts;
}
function Nodes() {
	const group = useRef(null);
	const nodes = useMemo(() => fibonacciSphere(70, 2.4), []);
	const edges = useMemo(() => {
		const segments = [];
		for (let i = 0; i < nodes.length; i++) for (let j = i + 1; j < nodes.length; j++) if (nodes[i].distanceTo(nodes[j]) < .95 && segments.length < 90) segments.push([nodes[i], nodes[j]]);
		return segments;
	}, [nodes]);
	useFrame((_, delta) => {
		if (group.current) {
			group.current.rotation.y += delta * .07;
			group.current.rotation.x += delta * .02;
		}
	});
	return /* @__PURE__ */ jsxs("group", {
		ref: group,
		children: [nodes.map((p, i) => /* @__PURE__ */ jsxs("mesh", {
			position: p,
			children: [/* @__PURE__ */ jsx("sphereGeometry", { args: [
				.035,
				12,
				12
			] }), /* @__PURE__ */ jsx("meshStandardMaterial", {
				color: i % 3 === 0 ? "#A855F7" : i % 3 === 1 ? "#06B6D4" : "#007ACC",
				emissive: i % 3 === 0 ? "#A855F7" : i % 3 === 1 ? "#06B6D4" : "#007ACC",
				emissiveIntensity: .8
			})]
		}, i)), edges.map(([a, b], i) => /* @__PURE__ */ jsx(Line, {
			points: [a, b],
			color: "#06B6D4",
			lineWidth: .6,
			transparent: true,
			opacity: .22
		}, i))]
	});
}
function ProfessionalAvatar() {
	const ref = useRef(null);
	useFrame((state) => {
		if (ref.current) {
			ref.current.position.y = Math.sin(state.clock.elapsedTime * .8) * .08;
			ref.current.rotation.y = Math.sin(state.clock.elapsedTime * .3) * .25;
		}
	});
	return /* @__PURE__ */ jsxs("group", {
		ref,
		children: [
			/* @__PURE__ */ jsxs("mesh", {
				position: [
					0,
					.55,
					0
				],
				castShadow: true,
				children: [/* @__PURE__ */ jsx("sphereGeometry", { args: [
					.32,
					32,
					32
				] }), /* @__PURE__ */ jsx("meshStandardMaterial", {
					color: "#d9b89a",
					roughness: .6,
					metalness: .05
				})]
			}),
			/* @__PURE__ */ jsxs("mesh", {
				position: [
					0,
					.72,
					-.04
				],
				children: [/* @__PURE__ */ jsx("sphereGeometry", { args: [
					.33,
					32,
					32,
					0,
					Math.PI * 2,
					0,
					Math.PI / 2.2
				] }), /* @__PURE__ */ jsx("meshStandardMaterial", {
					color: "#2a1f1a",
					roughness: .7
				})]
			}),
			/* @__PURE__ */ jsxs("mesh", {
				position: [
					0,
					.22,
					0
				],
				children: [/* @__PURE__ */ jsx("cylinderGeometry", { args: [
					.11,
					.13,
					.18,
					16
				] }), /* @__PURE__ */ jsx("meshStandardMaterial", {
					color: "#d9b89a",
					roughness: .6
				})]
			}),
			/* @__PURE__ */ jsxs("mesh", {
				position: [
					0,
					-.28,
					0
				],
				children: [/* @__PURE__ */ jsx("cylinderGeometry", { args: [
					.55,
					.38,
					.7,
					6
				] }), /* @__PURE__ */ jsx("meshStandardMaterial", {
					color: "#1a1d2e",
					roughness: .7,
					metalness: .2
				})]
			}),
			/* @__PURE__ */ jsxs("mesh", {
				position: [
					0,
					-.1,
					.32
				],
				rotation: [
					.15,
					0,
					0
				],
				children: [/* @__PURE__ */ jsx("coneGeometry", { args: [
					.12,
					.3,
					3
				] }), /* @__PURE__ */ jsx("meshStandardMaterial", {
					color: "#f4f4f0",
					roughness: .5
				})]
			}),
			/* @__PURE__ */ jsxs("mesh", {
				position: [
					0,
					-.15,
					.36
				],
				rotation: [
					.1,
					0,
					0
				],
				children: [/* @__PURE__ */ jsx("boxGeometry", { args: [
					.07,
					.34,
					.02
				] }), /* @__PURE__ */ jsx("meshStandardMaterial", {
					color: "#007ACC",
					emissive: "#007ACC",
					emissiveIntensity: .25
				})]
			}),
			/* @__PURE__ */ jsxs("mesh", {
				position: [
					-.1,
					.6,
					.28
				],
				children: [/* @__PURE__ */ jsx("sphereGeometry", { args: [
					.025,
					8,
					8
				] }), /* @__PURE__ */ jsx("meshStandardMaterial", { color: "#0d1117" })]
			}),
			/* @__PURE__ */ jsxs("mesh", {
				position: [
					.1,
					.6,
					.28
				],
				children: [/* @__PURE__ */ jsx("sphereGeometry", { args: [
					.025,
					8,
					8
				] }), /* @__PURE__ */ jsx("meshStandardMaterial", { color: "#0d1117" })]
			})
		]
	});
}
function Scene({ mouse }) {
	const group = useRef(null);
	useFrame(() => {
		if (group.current) {
			group.current.rotation.y += (mouse.x * .3 - group.current.rotation.y) * .05;
			group.current.rotation.x += (-mouse.y * .2 - group.current.rotation.x) * .05;
		}
	});
	return /* @__PURE__ */ jsxs("group", {
		ref: group,
		children: [
			/* @__PURE__ */ jsx("ambientLight", { intensity: .4 }),
			/* @__PURE__ */ jsx("pointLight", {
				position: [
					5,
					5,
					5
				],
				intensity: 1.2,
				color: "#A855F7"
			}),
			/* @__PURE__ */ jsx("pointLight", {
				position: [
					-5,
					-2,
					3
				],
				intensity: 1,
				color: "#06B6D4"
			}),
			/* @__PURE__ */ jsx("pointLight", {
				position: [
					0,
					3,
					4
				],
				intensity: .6,
				color: "#ffffff"
			}),
			/* @__PURE__ */ jsx(Float, {
				speed: 1.2,
				rotationIntensity: .2,
				floatIntensity: .4,
				children: /* @__PURE__ */ jsx(ProfessionalAvatar, {})
			}),
			/* @__PURE__ */ jsx(Nodes, {})
		]
	});
}
function ConstellationOrb({ mouse }) {
	return /* @__PURE__ */ jsx(Canvas, {
		camera: {
			position: [
				0,
				0,
				6
			],
			fov: 45
		},
		dpr: [1, 2],
		gl: {
			antialias: true,
			alpha: true
		},
		style: { background: "transparent" },
		children: /* @__PURE__ */ jsx(Suspense, {
			fallback: null,
			children: /* @__PURE__ */ jsx(Scene, { mouse })
		})
	});
}
//#endregion
export { ConstellationOrb };
