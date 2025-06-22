"use client"

import React, { useEffect, useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"

export default function Earth(props) {
  const group = useRef()
  const { scene } = useGLTF("/planet/earth.glb")

  // Rotasi otomatis
  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.002
    }
  })

  // 🧹 Bersihkan mesh yang rusak
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        const pos = child.geometry?.attributes?.position
        if (!pos || !pos.array || !pos.array.length) {
          console.warn("🗑 Removing invalid mesh:", child.name)
          scene.remove(child)
        }
      }
    })
  }, [scene])

  return <primitive ref={group} object={scene} {...props} scale={3} />
}

useGLTF.preload("/planet/earth.glb")
