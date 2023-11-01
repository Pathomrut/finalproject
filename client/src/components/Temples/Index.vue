<template>
    <div class="container p-5">
        <div class="p-2">
            <h1 class="fw-bold text-light">Get All Temple</h1>
            <br>
            <h3 class="fw-bold text-light">วัดมีจำนวนทั้งหมด : {{ temples.length }} แห่ง</h3>
        </div>
        <div class="d-flex justify-content-center">
            <div class="p-2 shadow-lg bg-light rounded" style="width: 60rem;">
                <button class="btn mb-2 float-end shadow-sm text-light" v-on:click="navigateTo('/temple/create/')" style="background: linear-gradient(105deg, #88beee, #0a2e73);">Create
                    Temple</button>
                <table class="table table-primary table-striped">
                    <thead>
                        <tr>
                            <th scope="row" style="width: 50px;">ID</th>
                            <th scope="row">ชื่อของวัด</th>
                            <th scope="row" style="width: 230px;">Read / Edit / Delete</th>
                        </tr>
                    </thead>
                    <tbody v-for="temple in temples" v-bind:key="temple.id">
                        <tr>
                            <td>{{ temple.id }}</td>
                            <td class="text-start">{{ temple.name }}</td>
                            <td>
                                <button class="btn btn-primary shadow-sm"
                                    v-on:click="navigateTo('/temple/' + temple.id)">Read</button>
                                <button class="btn btn-success shadow-sm"
                                    v-on:click="navigateTo('/temple/edit/' + temple.id)">Edit</button>
                                <button class="btn btn-danger shadow-sm" v-on:click="deleteTemple(temple)">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
import TemplesService from '@/services/TemplesService';
export default {
    data() {
        return {
            temples: []
        }
    },
    async created() {
        this.temples = (await TemplesService.index()).data
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route)
        },
        async deleteTemple(temple) {
            let result = confirm("What to delete?")
            if (result) {
                try {
                    await TemplesService.delete(temple)
                    this.refreshData()
                } catch (error) {
                    console.log(error)
                }
            }
        },
        async refreshData() {
            this.temples = (await TemplesService.index()).data
        }
    }
}
</script>
<style scoped></style>