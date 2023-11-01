<template>
    <div class="container">
        <div class="position-absolute top-50 start-50 translate-middle shadow-lg p-3 mb-5 bg-light rounded">
            <form class="ps-2" style="width: 55rem; height: 38rem" v-on:submit.prevent="createTemple">
                <div class="row mb-3 text-start">
                    <div class="col-4 d-flex justify-content-center align-items-center rounded shadow me-2"
                        style="height: 38rem; background: #3786bd;">
                        <h1 class="fw-bold text-light">Create <br> Temple</h1>
                    </div>
                    <div class="col">
                        <div class="p-2">
                            <label for="name" class="form-label">Temple Name</label>
                            <input type="text" class="form-control shadow-sm" placeholder="กรุณากรอกชื่อวัด"
                                v-model="temple.name" required>
                        </div>
                        <div class="p-2">
                            <label for="address" class="form-label">Address</label>
                            <input type="text" class="form-control shadow-sm" placeholder="กรุณากรอกที่อยู่ของวัด"
                                v-model="temple.address" required>
                        </div>
                        <div class="p-2">
                            <label for="coordinates" class="form-label">Coordinates</label>
                            <input type="url" class="form-control shadow-sm" placeholder="กรุณากรอกพิกัดของวัด"
                                v-model="temple.coordinates" required>
                        </div>
                        <div class="p-2">
                            <label for="view_time" class="form-label">View Time</label>
                            <input type="text" class="form-control shadow-sm" placeholder="กรุณากรอกเวลาเปิดทำการ"
                                v-model="temple.view_time" required>
                        </div>
                        <div class="p-2">
                            <label for="telephone" class="form-label">Telephone Number</label>
                            <input type="text" class="form-control shadow-sm" placeholder="กรุณากรอกเบอร์โทรศัพท์"
                                v-model="temple.telephone" required>
                        </div>
                        <div class="p-2">
                            <label for="website" class="form-label">Website</label>
                            <input type="text" class="form-control shadow-sm" placeholder="กรุณากรอกเว็บไซด์วัด"
                                v-model="temple.website" required>
                        </div>
                        <div class="p-2 mt-2">
                            <button type="submit" class="btn btn-primary rounded shadow-sm">Create</button>
                            <a @click="$router.back()" class="btn btn-danger rounded shadow-sm">Go Back</a>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import TemplesService from '@/services/TemplesService'

export default {
    data() {
        return {
            temple: {
                name: '',
                address: '',
                coordinates: '',
                view_time: '',
                telephone: '',
                website: ''
            }
        }
    },
    methods: {
        async createTemple() {
            try {
                await TemplesService.post(this.temple)
                this.$router.push({
                    name: 'temples'
                })
            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>
<style scoped></style>