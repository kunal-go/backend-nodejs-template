import dotenv from "dotenv"
import path from "path"
loadEnvVariables()

function loadEnvVariables() {
	const envFilePath = path.join(__dirname, "..", ".env")
	const { error } = dotenv.config({ path: envFilePath })

	if (error) {
		console.log(`Failed to load environment variables: ${error.message}`)
	} else {
		console.log(`Environment variables successfully loaded`)
	}
}

import server from "./server"
server()
