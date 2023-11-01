import Api from '@/services/Api'

export default {
    index (search) {
        return Api().get('temples')
    },
    show (templeId) {
        return Api().get('temple/' + templeId)
    },
    post (temple) {
        return Api().post('temple/', temple)
    },
    put (temple) {
        return Api().put('temple/' + temple.id, temple)
    },
    delete (temple) {
        return Api().delete('temple/' + temple.id, temple)
    },
}