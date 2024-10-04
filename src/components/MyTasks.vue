<template>
    <div class="container">
        <header>
            <h3>Мои</h3>
            <button @click="backToHome">
                <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path></svg>
                <span>Back</span>
            </button>
        </header>
        <main>
            <div class="table-container">
                <button>Добавить</button>
                <el-table :data="bitrixList" style="width: 100%">
                    <el-table-column label="Список битр" colspan="3" align="center">
                        <template v-slot:header>
                            <div class="table-header">Список битр</div>
                        </template>
                        <el-table-column prop="address" label="Адрес"></el-table-column>
                        <el-table-column label="Редактировать" width="130">
                            <template v-slot="scope">
                                <el-button
                                    type="primary"
                                    @click="editBitrix(scope.row)"
                                    icon="el-icon-edit"
                                    circle
                                />
                            </template>
                        </el-table-column>
                        <el-table-column label="Удалить" width="100">
                            <template v-slot="scope">
                                <button class="button">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 69 14"
                                        class="svgIcon bin-top"
                                    >
                                        <g clip-path="url(#clip0_35_24)">
                                            <path
                                                fill="black"
                                                d="M20.8232 2.62734L19.9948 4.21304C19.8224 4.54309 19.4808 4.75 19.1085 4.75H4.92857C2.20246 4.75 0 6.87266 0 9.5C0 12.1273 2.20246 14.25 4.92857 14.25H64.0714C66.7975 14.25 69 12.1273 69 9.5C69 6.87266 66.7975 4.75 64.0714 4.75H49.8915C49.5192 4.75 49.1776 4.54309 49.0052 4.21305L48.1768 2.62734C47.3451 1.00938 45.6355 0 43.7719 0H25.2281C23.3645 0 21.6549 1.00938 20.8232 2.62734ZM64.0023 20.0648C64.0397 19.4882 63.5822 19 63.0044 19H5.99556C5.4178 19 4.96025 19.4882 4.99766 20.0648L8.19375 69.3203C8.44018 73.0758 11.6746 76 15.5712 76H53.4288C57.3254 76 60.5598 73.0758 60.8062 69.3203L64.0023 20.0648Z"
                                            ></path>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_35_24">
                                                <rect fill="white" height="14" width="69"></rect>
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 69 57"
                                        class="svgIcon bin-bottom"
                                    >
                                        <g clip-path="url(#clip0_35_22)">
                                            <path
                                                fill="black"
                                                d="M20.8232 -16.3727L19.9948 -14.787C19.8224 -14.4569 19.4808 -14.25 19.1085 -14.25H4.92857C2.20246 -14.25 0 -12.1273 0 -9.5C0 -6.8727 2.20246 -4.75 4.92857 -4.75H64.0714C66.7975 -4.75 69 -6.8727 69 -9.5C69 -12.1273 66.7975 -14.25 64.0714 -14.25H49.8915C49.5192 -14.25 49.1776 -14.4569 49.0052 -14.787L48.1768 -16.3727C47.3451 -17.9906 45.6355 -19 43.7719 -19H25.2281C23.3645 -19 21.6549 -17.9906 20.8232 -16.3727ZM64.0023 1.0648C64.0397 0.4882 63.5822 0 63.0044 0H5.99556C5.4178 0 4.96025 0.4882 4.99766 1.0648L8.19375 50.3203C8.44018 54.0758 11.6746 57 15.5712 57H53.4288C57.3254 57 60.5598 54.0758 60.8062 50.3203L64.0023 1.0648Z"
                                            ></path>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_35_22">
                                                <rect fill="white" height="57" width="69"></rect>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </button>
                            </template>
                        </el-table-column>
                    </el-table-column>
                </el-table>
            </div>
        </main>
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
    setup() {
        const router = useRouter();

        const backToHome = () => {
            router.push('/');
        }

        const bitrixList = ref([
            { address: 'Адрес 1' },
            { address: 'Адрес 2' },
            { address: 'Адрес 3' },
        ]);

        return {
            backToHome,
            bitrixList
        }
    }
})
</script>

<style lang="sass" scoped>
header
  display: flex
  justify-content: space-between

button > svg
  margin-right: 5px
  margin-left: 5px
  font-size: 20px
  transition: all 0.4s ease-in


button:hover > svg
  font-size: 1.2em
  transform: translateX(-5px)

.table-container
  display: flex
  flex-direction: column
  gap: 10px

.button
  width: 30px
  height: 30px
  border-radius: 50%
  background-color: rgb(20, 20, 20)
  border: none
  font-weight: 600
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.164)
  cursor: pointer
  transition-duration: 0.3s
  overflow: hidden
  position: relative
  gap: 2px


.svgIcon
  width: 12px
  transition-duration: 0.3s


.svgIcon path
  fill: white


.button:hover
  transition-duration: 0.3s
  background-color: rgb(255, 69, 69)
  align-items: center
  gap: 0


.bin-top
  transform-origin: bottom right

.button:hover .bin-top
  transition-duration: 0.5s
  transform: rotate(160deg)

</style>