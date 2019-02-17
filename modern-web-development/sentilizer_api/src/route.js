import { sentilize } from './sentilizer'

export const routes = [
    {
        method: 'GET',
        path: '/',
        handler: function (request, h){
            return 'This is the homepage';
        }
    },
    {
        method: 'POST',
        path: '/sentilize',
        handler: function (request, h){
            const payload = request.payload
            return sentilize(payload.sentence)
        }
    }
]