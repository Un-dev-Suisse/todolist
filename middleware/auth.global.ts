export default defineNuxtRouteMiddleware((to, from) => {
    const state = useState<string>('username');

    // !state.value => Vrai si vide ou non défini
    if (to.path !== '/auth/' && !state.value) {
        return useRouter().push('/auth/');
    }
});
