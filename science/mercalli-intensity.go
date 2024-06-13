// algoritmo para calcular la atenuación de la intensidad de mercalli
package main

import (
	"fmt"
	"math"
)

type EarthquakeData struct {
	Profundidad  float64
	Magnitud     float64
	Diametro     float64
	Intensidad   float64
}

func calculateDiameter(magnitud, profundidad float64) float64 {
	radius := math.Pow(10, 0.3*magnitud)
	return math.Max(2*radius, 0)
}

func calculateIntensity(magnitud, distancia float64) float64 {
	I0 := magnitud * 2
	beta := 1.5
	return math.Max(I0-beta*math.Log10(distancia), 0)
}

func main() {
	var sismo EarthquakeData

	fmt.Println("Ingrese los datos del sismo:")

	fmt.Print("Profundidad (km): ")
	fmt.Scanln(&sismo.Profundidad)

	fmt.Print("Magnitud: ")
	fmt.Scanln(&sismo.Magnitud)

	sismo.Diametro = calculateDiameter(sismo.Magnitud, sismo.Profundidad)
	sismo.Intensidad = calculateIntensity(sismo.Magnitud, sismo.Profundidad)

	fmt.Println("\nDatos calculados del sismo:")
	fmt.Printf("Profundidad: %f km\n", sismo.Profundidad)
	fmt.Printf("Magnitud: %f\n", sismo.Magnitud)
	fmt.Printf("Diametro del área afectada: %f km\n", sismo.Diametro)
	fmt.Printf("Intensidad de Mercalli: %f\n", sismo.Intensidad)
}
