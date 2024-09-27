export const useAuthStore = defineStore('auth', () => {
    const username = useState<string>('username');

    function isValidUsername(username: string) {
        return username.length > 3;
    }

    return {
        username,
        login() {
            if (!isValidUsername(username.value)) {
                return alert(`Nom d'utilisateur invalide`);
            }
            useRouter().push('/');
        },
    }
});
