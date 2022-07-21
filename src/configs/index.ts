import dotenv from "dotenv"
import path from "path"

let isEnvLoaded = false
loadEnvVariables()

function loadEnvVariables() {
	if (isEnvLoaded) return

	const envFilePath = path.join(__dirname, "..", "..", ".env")
	const { error } = dotenv.config({ path: envFilePath })

	if (error) {
		console.log(`Failed to load environment variables: ${error.message}`)
	} else {
		console.log(`Environment variables successfully loaded`)
	}
	isEnvLoaded = true
}

import { serverConfigs } from "./server.configs"

export default {
	server: serverConfigs,
}
