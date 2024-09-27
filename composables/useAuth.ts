export function username() {
    const authStore = useAuthStore();

    return authStore.username;
}
