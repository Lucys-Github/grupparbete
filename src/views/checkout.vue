<script setup>

</script>


<template>
    <div class="xl:px-[10%] px-4 my-4 overflow-x-hidden">
        <p class="text-2xl font-antonio pt-4 pl-4">Checkout</p>
        <form>
            <div class="grid p-4 grid-cols-2 grid-rows-3 gap-4 2xl:gap-[1.7vw] font-inter ">
                <div class="bg-[#1c1c1c]">
                    <fieldset class="p-4">
                        <legend class="text-[#F5F5F5] pt-4">Delivery Information</legend>
                        <label for="email">Email</label>
                        <input id="email" type="email" placeholder="Email"
                            class="placeholder-[#505050] text-black bg-[#F5F5F5] w-full"
                            required maxlength="320">
                        <label for="phoneNumber">Phone number</label>
                        <input id="phoneNumber" type="text" placeholder="Phone number"
                            class="placeholder-[#505050] text-black bg-[#F5F5F5]"
                            pattern="\+?\d{3}" required>
                        <div class="inline">
                            <label for="firstName">First name</label>
                            <input id="firstName" type="text" placeholder="First name"
                                class="placeholder-[#505050]  text-black bg-[#F5F5F5]" pattern="[a-z]{0,30}" required>
                        </div>
                        <div class="inline">
                            <label for="lastName">Last name </label>
                            <input id="lastName" type="text" placeholder="Last name"
                                class="placeholder-[#505050] text-black bg-[#F5F5F5]"  pattern="[a-z]{0,30}" required>
                        </div>
                        <label for="adress">Delivery adress</label>
                        <input id="adress" type="text" placeholder="Delivery adress"
                            class="placeholder-[#505050] text-black bg-[#F5F5F5]">
                        <label for="postCode">Post code</label>
                        <input id="postCode" type="number" placeholder="Post code"
                            class="placeholder-[#505050] text-black bg-[#F5F5F5]">
                        <label for="postTown">Post town</label>
                        <input id="postTown" type="text" placeholder="Post town"
                            class="placeholder-[#505050] text-black bg-[#F5F5F5]">
                    </fieldset>
                </div>
                <div class="bg-[#1c1c1c] row-span-3">
                    <p class="text-[#F5F5F5]">Cart</p>
                </div>
                <div class="bg-[#1c1c1c]"> third div
                </div>
                <div class="bg-[#1c1c1c]"> third div
                </div>
            </div>
        </form>
    </div>
</template>

<style scoped>
label {
    display: block;
    margin-top: 1em;
}

input:focus {
    outline: 3px solid #FF007A !important;
    border: 2px solid black ;
}


input:valid {
    outline: 2px solid palegreen;
}

input:invalid {
    outline: 2px solid red;
}
</style>
