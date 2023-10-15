import { calculateCarbonAsync } from '@/services/CarbonCalculationService'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, response: NextApiResponse<any>) {
    try {
        let res = await calculateCarbonAsync(req?.body?.url);
        response?.status(200)?.json(await res?.json())
    }
    catch (ex) {
        response?.status(500)?.json(ex)
    }
}