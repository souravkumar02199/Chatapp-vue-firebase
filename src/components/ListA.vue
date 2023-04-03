<template>
  <v-app>
    <v-container>
     <v-row >
       <v-col xs="12" sm="12"  md="8" lg="8" class="left_side">
         <v-row class="text-start">
           <v-col class="checkout py-2">
             <span color="#000034" class="text-left font-weight-bold display-2 justify-start">checkout</span>
           </v-col>
         </v-row>
         <v-row row class="">
           <v-col class="text-start">
             <span class="font-weight-lighten justify-start text-left information">information</span>
             <span class="pl-2 pr-3"><v-icon>mdi-chevron-right</v-icon></span>
             <span white--text  class="font-weight-lighten justify-start">Payment</span>
           </v-col>
         </v-row>
         <v-row row>
           <v-col  class="text-start py-0">
             <v-card width="" height="145px"   class="first_card">
               <v-row row class="text-start">
                   <v-col class="py-0">
                     <h3 style="width:203px" class="pt-7 pl-7 justify-center">Lifetime Warranty🔥</h3>
                     <p  style="width:93%;font-size: 14px;" class="text-xs ml-7 mb-0">Add a lifetime warranty & enjoy peace of mind for life with your dream collections order for just $4.99</p>
                   </v-col>
                   <v-col class="py-0 mt-10 px-0">
                     <v-btn height="62px" color="#000034" class="btn_1" prepend-icon="">
                        <span class="pt-1">Add- $4.99</span>
                     </v-btn>                                
                   </v-col>
               </v-row>
             </v-card>
           </v-col>
         </v-row>
         <v-row row>
           <v-col class="text-start py-0">
             <v-card width="" height="160px"   class="second_card" >
               <v-row row class="text-start">
                   <v-col class="py-0">
                     <h3 style="width:181px" class="pt-7 pl-7 justify-center">Express Checkout</h3>                    
                   </v-col>
                   <v-col class="py-0 mt-10 px-0">                               
                   </v-col>
               </v-row>
               <v-row row>
                   <v-col class="py-0 ml-7 mt-5">
                     <v-btn width="32%" height="50px" color="#5A31F4" class="btn_1 mr-1" prepend-icon=""><span style="height:16px;width:80px"><v-img  src="../../src/assets/The-Shop-Pay-logo.png"></v-img></span></v-btn>
                     <v-btn width="32%" height="50px" color="#F6C657" class="btn_1 mr-1" prepend-icon=""><span style="width:80px"><v-img  src="../../src/assets/download.png"></v-img></span></v-btn>
                     <v-btn width="32%" height="50px" color="#000000" class="btn_1 mr-1" prepend-icon=""><span style="width:75px"><v-img  src="../../src/assets/webimage-10B13DE9-ABD9-4318-B33EF188C9F552F5.jpg"></v-img></span></v-btn>
                   </v-col>
               </v-row>
             </v-card>
           </v-col>
         </v-row>
         <v-row row class="text-start mt-0">
           <v-col class="heading_2 py-0">
             <span color="#000034"  class="text-h4 font-weight-bold display-1 justify-start">Contact information</span>
           </v-col>
         </v-row>
         <v-row row class="text-start">
           <v-col class="py-0">
             <v-card width="" height="56px"   class="third_card">
               <v-text-field flat solo label="Email address" placeholder="johndoe@gmail.com" type="email" class="third_card_email" prepend-icon="mdi-email">
                 <v-icon></v-icon>
               </v-text-field>
             </v-card>
           </v-col>
         </v-row>
         <v-row row class="text-start">
           <v-col class="py-0">
             <v-card width="" height="56px"   class="third_card">
               <v-text-field flat solo label="Email address" placeholder="phone number" type="email" class="third_card_email" prepend-icon="mdi-phone-in-talk">
               </v-text-field>
             </v-card>
           </v-col>
         </v-row>
         <v-row row class="text-start mt-0">
           <v-col class="heading_2 py-0">
             <span color="#000034"  class="text-h4 font-weight-bold display-1 justify-start">Shipping Details</span>
           </v-col>
         </v-row>
         <v-row row class="text-start">
           <v-col class="py-0">
             <v-card width="" height="56px"   class="third_card">
               <v-text-field flat solo label="Select a Country" placeholder="johndoe@gmail.com" type="email" prepend-icon="mdi-license">
               </v-text-field>
             </v-card>
           </v-col>
         </v-row>
         <v-row row class="text-start">
           <v-col class="py-0">
             <v-card width="" height="56px"   class="third_card">
               <v-text-field flat solo label="First Name" placeholder="johndoe@gmail.com" type="email" prepend-icon="mdi-account-outline">
               </v-text-field>
             </v-card>
           </v-col>
           <v-col class="py-0">
             <v-card width="" height="56px"   class="third_card">
               <v-text-field flat solo label="Last Name" placeholder="johndoe@gmail.com" type="email" prepend-icon="mdi-account-outline">
               </v-text-field>
             </v-card>             
           </v-col>
         </v-row>
         <v-row row class="text-start">
           <v-col class="py-0">
             <v-card width="" height="56px"   class="third_card">
               <v-text-field flat solo label="Address" placeholder="johndoe@gmail.com" type="email" prepend-icon="mdi-map-marker-circle">
               </v-text-field>
             </v-card>
           </v-col>
         </v-row>
         <v-row row class="text-start">
           <v-col class="py-0">
             <v-card width="" height="56px"   class="third_card">
               <v-text-field flat solo label="Aparment, suit, etc (Optional)" placeholder="johndoe@gmail.com" type="email" prepend-icon="mdi-domain">
               </v-text-field>
             </v-card>
           </v-col>
         </v-row>
         <v-row row class="text-start">
           <v-col class="py-0">
             <v-card width="" height="56px"   class="third_card">
               <v-text-field flat solo label="City" placeholder="johndoe@gmail.com" type="email" prepend-icon="">
               </v-text-field>
             </v-card>
           </v-col>
           <v-col class="py-0">
             <v-card width="" height="56px"   class="third_card">
               <v-text-field flat solo label="Post code" placeholder="johndoe@gmail.com" type="email" prepend-icon="">
               </v-text-field>
             </v-card>
           </v-col>
         </v-row>
         <v-row row class="text-start mt-0">
           <v-col class="heading_2 py-0">
             <span color="#000034"  class="text-h4 font-weight-bold display-1 justify-start">Shipping Method</span>
           </v-col>
         </v-row>
         <v-row row class="text-start">
           <v-col class="py-0">
             <v-card width="" height="64px"   class="third_card">
               <v-text-field flat solo label="Free Shipping" placeholder="johndoe@gmail.com" type="email" prepend-icon="mdi-ellipse-outline">
               </v-text-field>
             </v-card>
           </v-col>
         </v-row>
         <v-row row class="text-start">
           <v-col class="py-0" color="#000034">
               <v-btn width="383px" height="56px" color="#000034" class="rounded-lg third_card3 mb-2" prepend-icon="">
                 <span class="pt-1">Continue to payment <v-icon>mdi-arrow-right-thin</v-icon></span>
               </v-btn>
           </v-col>
         </v-row>
       </v-col>
       <v-col xs="12" sm="12" lg="4" md="4" class="right_side py-0">
         <v-card height="490px"  color="#EFF6FE" class="third_card">
         </v-card>
         <v-card height="196px"   class="third_card mt-7">
             <v-row row class="text-start ma-0">
                   <v-col xs="3" sm="3" lg="1" md="1" class="py-0 mt-6 ml-8 my-0" >
                     <!-- <h3 style="width:203px" class="pt-7 pl-7 justify-center">Lifetime Warranty🔥</h3> -->
                    <span style="width:203px"><v-icon>mdi-hand-coin-outline</v-icon></span>                     
                   </v-col>
                   <v-col class="py-0 mt-6 ml-8 my-0 mr-1">
                      <span>30 days satisfaction Guareantee with money back</span> 
                   </v-col>            
             </v-row>
             <v-row row class="text-start mx-0 my-0">
                   <v-col xs="3" sm="3" lg="1" md="1" class="py-0 mt-6 ml-8 my-0" >
                    <span style="width:203px"><v-icon>mdi-hand-coin-outline</v-icon></span>                     
                   </v-col>
                   <v-col class="py-0 mt-6 ml-8 my-0 mr-1">
                      <span>30 days satisfaction Guareantee with money back</span> 
                   </v-col>            
             </v-row>
         </v-card>
       </v-col>
     </v-row>
   </v-container>
  </v-app>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
   setup() {
       
   },
})
</script>
<style scoped>
.information {
   color: #7782F1;
   width: 150px;
}
.first_card{
 margin-top: 38px;
 border-radius: 16px;
}
.second_card{
 margin-top: 20px;
 border-radius: 16px;
}
.third_card{
 margin-top: 20px;
 border-radius: 16px;
}
.third_card3{
 margin-top: 20px;
 background: #000034;
 color: #FFFFFF;
 line-height: 56px;
}

.heading_2{
 margin-top: 50px;
}
.checkout{
 height: 46px;
}
.mdi.mdi-email{
 padding-left: 12px;
}
::v-deep .v-icon.mdi {
 margin-left: 12px;
}

.btn_1{
 background: #000034;
 color: #FFFFFF;
 border-radius: 16px;
}
</style>