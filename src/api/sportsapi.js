import axios from 'axios'

const API_KEY = process.env.SPORTS_API_KEY
const BASE_URL = process.env.SPORTS_API_BASE_URL

const apiClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        'x-apisports-apikey': API_KEY,
    },
})

/**
 * Get today games
 * @returns {Promise<Array>} Games list
 */

export const getTodayMatches = async() => {
    try {
        const response = await apiClient.get('/fixtures', {
            params: {
            date: new Date().toISOString().split('T')[0],
            },
        })
        return response.data.response
    }catch (error) {
        console.error('Error fetching today matches', error)
    }
}

