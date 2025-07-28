# 🌍 Mein Web-Portfolio: Places, where I want to work and why

Dies ist ein responsives, persönliches Webportfolio, das Städte zeigt, in denen ich mir vorstellen kann zu arbeiten – inklusive meiner Beweggründe.  
Außerdem enthält es meinen Lebenslauf, Projekte aus Studium und Eigeninitiative sowie Kontaktmöglichkeiten.

## Verwendete Technologien

- HTML5 / CSS3 / SCSS
- JavaScript

## Funktionen

- Modularer Aufbau mit SCSS Strukturen_ @extend für wiederverwendbare Layoutkomponenten (%header, %frame_1, ...)
- Responsive Grid-System: mit auto-fit und minmax() + Breakpoints
- Visuelle Animationen beim Scrollen: klassengesteuert mit Intersection Observer mit Delay
- Hover-Effekt bei Bildern mit Skalierung (transform: scale(1.1))
- Barrierfreiheit: aria-labelledy, tabindex="-1" + alt-Texte + semantische HTML-Elemente (section, article, main, ...)
- JavaScript-Funktionalität: Sticky-Navigation bei Scroll
- Ladeoptimierung: Bilder werden per loading="lazy" geladen
- SEO-Optimierung: Titel + Meta-Descriptions mit relevanten Keywords
- Verwendung von AVIF-Bildern: Umwandlung der Bilder ins avif-Format für bessere SEO und schnellere Ladezeiten
- Logo und Favicon erstellt mit Figma

## Responsives Design

Die Website ist vollständig responsiv und für folgende Bildschirmgrößen optimiert:

- Mobilgeräte (≥ 360px)
- Tablets (≥ 1024px)
- Desktop (≥ 1440px und 1980px)

## Seiten-Übersicht

## Startseite

- Hero-Bild
- Intro-Element mit H1-Überschrift und kurzem Text
- Teaser mit den Top-3-Locations
- Icon-Element für Gründe der gewählten Orte
- kurzes About me-Element

## Locations Overview

- Hero-Element mit H1-Überschrift
- Überblick über alle Standorte mit Link zu den Detailseiten

## Locations Detailpage

- Intro-Element
- Vollbild-Element
- Text mit 2 Bildern des Ortes
- Teaser mit Link zu weiteren Standorten

## Criteria Page

- Bild-Text-Element mit H1-Überschrift
- ausgewählte Kriterien, warum diese Stadnorte ausgewählt wurden

## About me

- Text-Bild-Element
- CV als Timeline-Teaser
- ausgewählte Projekte

## Let's connect

- kurzer Text und Kontaktmöglichkeiten
