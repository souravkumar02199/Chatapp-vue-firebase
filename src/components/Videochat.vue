<template>
   <v-container class="bg-surface-variant">
        <v-btn type="submit" @click="audio" min-height="70px" bg-color="aquamarine" style="background-color: green;"  class="item-center">
            <v-icon size="45" color="#fff">mdi-video-plus</v-icon>
        </v-btn>
    </v-container>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import {computed} from 'vue'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { ZIM } from "zego-zim-web";
// import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import {useRoute} from 'vue-router/composables'

export default defineComponent({
      setup() {
          const route =useRoute()
          const roomId =computed(() =>route.params.id)
          
         
          const join = async() => {
                console.log(roomId.value);
                const appID = 556848689;
                const serverSecret = "13ece28be894223a4ba9eba5937e2b48";
                const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId.value,  Date.now(),  "sourav");
                const zp = ZegoUIKitPrebuilt.create(kitToken);
                zp.joinRoom({
                scenario: {
                    mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
                 },
            });
            
          }
          
 
          const   randomID=(len) =>{
            let result = '';
            if (result) return result;
            var chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP',
                maxPos = chars.length,
                i;
            len = len || 5;
            for (i = 0; i < len; i++) {
                result += chars.charAt(Math.floor(Math.random() * maxPos));
            }
            return result;
            }
            const getUrlParams= (
            url = window.location.href
            ) => {
            let urlStr = url.split('?')[1];
            return new URLSearchParams(urlStr);
            }

            const audio = async() => {
                const roomID = getUrlParams().get('roomID') || randomID(5);
                //   let myMeeting = async (element) => {
                // generate Kit Token
                //   const appID = 556848689;
                //   const serverSecret = "13ece28be894223a4ba9eba5937e2b48";
                //   const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, 5,  randomID(5),  randomID(5));


                //  // Create instance object from Kit Token.
                //   const zp = ZegoUIKitPrebuilt.create(kitToken);
                //   // start the call
                //   zp.joinRoom({
                //     scenario: {
                //       mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
                //     },
                //   });
                const userID = "sss"; 
            const userName = "userName" + userID;
            const appID = 556848689;
            const serverSecret = "13ece28be894223a4ba9eba5937e2b48";
            const TOKEN = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret,null, userID, userName);

            const zp = ZegoUIKitPrebuilt.create(TOKEN);
            zp.addPlugins({ ZIM });
                

            };




          return {join,audio,getUrlParams,randomID}

      },
  })
</script>
