<template>
    <div class="container">
        <div class="position-absolute top-50 start-50 translate-middle shadow-lg p-3 mb-5 bg-light rounded">
            <div class="ps-2" style="width: 55rem; height: 38rem">
                <div class="row mb-3 text-start">
                    <div class="col-4 d-flex justify-content-center align-items-center rounded shadow me-2"
                        style="height: 38rem; background: #3786bd;">
                        <h1 class="fw-bold text-light">Show <br> Temple</h1>
                    </div>
                    <div class="col">
                        <div class="p-2">
                            <label for="name" class="form-label">Temple Name</label>
                            <span class="input-group-text shadow-sm">{{ temple.name }}</span>
                        </div>
                        <div class="p-2">
                            <label for="address" class="form-label">Address</label>
                            <span class="input-group-text shadow-sm">{{ temple.address }}</span>
                        </div>
                        <div class="p-2">
                            <label for="coordinates" class="form-label">Coordinates</label>
                            <span class="input-group-text shadow-sm">{{ temple.coordinates }}</span>
                        </div>
                        <div class="p-2">
                            <label for="view_time" class="form-label">View Time</label>
                            <span class="input-group-text shadow-sm">{{ temple.view_time }}</span>
                        </div>
                        <div class="p-2">
                            <label for="telephone" class="form-label">Telephone Number</label>
                            <span class="input-group-text shadow-sm">{{ temple.telephone }}</span>
                        </div>
                        <div class="p-2">
                            <label for="website" class="form-label">Website</label>
                            <span class="input-group-text shadow-sm">{{ temple.website }}</span>
                        </div>
                        <div class="p-2 mt-2">
                            <a @click="$router.back()" class="btn btn-danger rounded shadow-sm">Go Back</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import TemplesService from '@/services/TemplesService';

export default {
    data() {
        return {
            temple: null
        }
    },
    async created() {
        try {
            let templeId = this.$route.params.templeId
            this.temple = (await TemplesService.show(templeId)).data
        } catch (error) {
            console.log(error)
        }
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route)
        },
    }

}
</script>
<style scoped></style>