<template>
    <div class="container mt-5">
        <h2>Authentification</h2>
        <form @submit.prevent="authStore.login">
            <div class="form-group mb-3">
                <label for="username">Nom d'utilisateur</label>
                <input type="text" id="username" v-model="authStore.username" class="form-control" required>
            </div>
            <button type="submit" class="btn btn-primary">Connexion</button>
        </form>
    </div>
</template>

<script setup lang="ts">

const authStore = useAuthStore();

</script>