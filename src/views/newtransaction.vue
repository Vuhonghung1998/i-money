<template>
  <form @submit.prevent="onSubmit">
    <!-- Start Main Form -->
    <div class="row mt-6">
      <div class="bg-white rounded-lg py-4">
        <div class="container mx-auto px-8">
          <div class="row">
            <label for="total" class="flex items-end">
              <div class="w-10 text-right leading-10 mr-4 pb-1">
                <span
                  class="
                    inline-block
                    px-1
                    text-black
                    border border-black
                    rounded
                    text-sm
                    font-bold
                  "
                  >VNĐ</span
                >
              </div>
              <div class="flex flex-col border-b border-gray-100 pb-1">
                <span class="font-semibold text-xs text-black">Total</span>
                <input
                  id="total"
                  type="text"
                  placeholder="0"
                  class="text-4xl text-black w-full outline-none mt-1"
                  v-model="total"
                />
              </div>
            </label>
          </div>
          <div class="row">
            <label for="category" class="flex items-center">
              <div
                class="
                  flex flex-none
                  w-10
                  text-right
                  leading-10
                  mr-4
                  items-center
                "
              >
                <span
                  class="inline-block ml-auto w-8 h-8 rounded-full bg-blue-300"
                ></span>
              </div>
              <div class="flex-1 border-b border-gray-100 py-3">
                <input
                  id="category"
                  type="text"
                  placeholder="Category"
                  class="text-xl text-black w-full outline-none"
                  v-model="category"
                />
              </div>
            </label>
          </div>
          <div class="row">
            <label for="note" class="flex items-center">
              <div
                class="
                  flex flex-none
                  w-10
                  text-right
                  leading-10
                  mr-4
                  items-center
                "
              >
                <span class="flex-none w-10 mr-4">
                  <i class="t2ico t2ico-document text-2xl"></i>
                </span>
              </div>
              <div class="flex-1 border-b border-gray-100 py-3">
                <input
                  id="note"
                  type="text"
                  placeholder="Note"
                  class="text-black w-full outline-none"
                  v-model="note"
                />
              </div>
            </label>
          </div>
          <div class="row">
            <label for="time" class="flex items-center">
              <div
                class="
                  flex flex-none
                  w-10
                  text-right
                  leading-10
                  mr-4
                  items-center
                "
              >
                <span class="flex-none w-10 mr-4">
                  <i class="t2ico t2ico-calendar text-2xl"></i>
                </span>
              </div>
              <div class="flex-1 border-b border-gray-100 py-3">
                <div class="text-black w-full">{{new Date().getDate() + '-' + (new Date().getMonth()+1) + '-' + new Date().getFullYear()}}</div>
              </div>
            </label>
          </div>
          <div class="row">
            <label for="wallet" class="flex items-center">
              <div
                class="
                  flex flex-none
                  w-10
                  text-right
                  leading-10
                  mr-4
                  items-center
                "
              >
                <span class="flex-none w-10 mr-4">
                  <i class="t2ico t2ico-wallet text-2xl"></i>
                </span>
              </div>
              <div class="flex-1 border-b border-gray-100 py-3">
                <div class="text-black w-full">My Wallet</div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>

    <div class="row-mt-6" v-if="!isShow">
      <button
        @click="isShow = true"
        class="
          rounded-lg
          bg-indigo-800
          py-3
          px-auto
          w-full
          text-white
          font-semibold
        "
      >
        More Details
      </button>
    </div>
    <!-- Start More Form -->
    <template v-if="isShow === true">
      <div class="row mt-6">
        <div class="bg-white rounded-lg py-4">
          <div class="container mx-auto px-8">
            <div class="row">
              <label for="location" class="flex items-center">
                <div
                  class="
                    flex flex-none
                    w-10
                    text-right
                    leading-10
                    mr-4
                    items-center
                  "
                >
                  <span class="flex-none w-10 mr-4">
                    <i class="t2ico t2ico-location text-2xl"></i>
                  </span>
                </div>
                <div class="flex-1 border-b border-gray-100 py-3">
                  <input
                    id="location"
                    type="text"
                    placeholder="Select a location"
                    class="text-xl text-black w-full outline-none"
                  />
                </div>
              </label>
            </div>
            <div class="row">
              <label for="withPerson" class="flex items-center">
                <div
                  class="
                    flex flex-none
                    w-10
                    text-right
                    leading-10
                    mr-4
                    items-center
                  "
                >
                  <span class="flex-none w-10 mr-4">
                    <i class="t2ico t2ico-users text-2xl"></i>
                  </span>
                </div>
                <div class="flex-1 border-b border-gray-100 py-3">
                  <input
                    id="withPerson"
                    type="text"
                    placeholder="Category"
                    class="text-xl text-black w-full outline-none"
                  />
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-6">
        <div class="bg-white rounded-lg py-4">
          <div class="container mx-auto px-8">
            <div class="row">
              <label for="file" class="flex items-center text-blue-700">
                <div
                  class="
                    flex flex-none
                    w-10
                    text-right
                    leading-10
                    mr-4
                    items-center
                  "
                >
                  <span class="flex-none w-10 mr-4">
                    <i class="t2ico t2ico-camera text-2xl"></i>
                  </span>
                </div>
                <div class="flex-1 border-b border-gray-100 py-3 font-semibold">
                  <div>Upload Photos </div>
                  <input type="file" class="w-0 h-0 overflow-hidden absolute" id="file" @change="onChangeFile">
                </div>
              </label>
            </div>
          </div>
        </div>
        <div class=" text-red-700 px-8 py-3">{{errorFile}}</div>
      </div>
    </template>
    <button type="submit" class="py-3 w-full text-center bg-green-800 rounded-lg text-white mt-4">TestSubmit</button>
  </form>
</template>
<script>
import { ref } from "vue";
import { useUser} from "../composables/useUser"
import useTransaction from "../composables/useTransaction"
import useStorage from "../composables/useStorage"
export default {
  setup() {
    const isShow = ref(false);
    const {getUser } = useUser();
    const {addRecord, error} = useTransaction('transactions');
    const {uploadFile , url} = useStorage('transactions');
    const total = ref(0);
    const category = ref("");
    const note = ref("");
    const time = ref(new Date());
    const file = ref(null);
    const errorFile = ref(null);
    function onChangeFile(event){
        const selected = event.target.files[0];
        const typesFile = ["image/jpeg", "image/png", "image/jpg"]
        if(selected && typesFile.includes(selected.type)){
            file.value = selected;
            // console.log(selected);
        }else{
            file.value = null;
            errorFile.value = "Must selected file jpg, jpeg or png "
            console.log(errorFile.value);
        }
    }
    async function onSubmit() {
        if(file.value) await uploadFile(file.value);
        console.log("url file" ,url);
        const {user} = getUser();
        console.log(user)
        const transaction = {
            total:parseInt(total.value),
            category:category.value,
            note:note.value,
            time:time.value,
            userId:user.value.uid,
            thumnail:url.value
        }
        await addRecord(transaction);
        console.log(error);
        console.log("Success")
    }
    return { onSubmit, isShow, total, category, note, time, onChangeFile, errorFile};
  },
};
</script>