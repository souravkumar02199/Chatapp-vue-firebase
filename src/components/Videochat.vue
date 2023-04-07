<template>
   <v-container class="bg-surface-variant">
        <v-btn type="submit" @click="join" min-height="70px" bg-color="aquamarine" style="background-color: green;"  class="item-center">
            <v-icon size="45" color="#fff">mdi-video-plus</v-icon>
        </v-btn>
    </v-container>
</template>

<script>
//  import data from '../user.json';
import { defineComponent } from '@vue/composition-api'
// import {computed} from 'vue'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
// import {useRoute} from 'vue-router/composables'

export default defineComponent({
      setup() {
        //   const route =useRoute()
        //   let roomId = 123
          
         
          const join = async() => {
                // console.log(this.roomID);
                const appID = 556848689;
                const serverSecret = "13ece28be894223a4ba9eba5937e2b48";
                const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret,123,  Date.now(),  "sourav");
                console.log("kk");
                const zp = ZegoUIKitPrebuilt.create(kitToken);
                zp.joinRoom({
                scenario: {
                    mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
                 },
            });
            
          }
  
          return {join}
      },


       
  })
</script>
