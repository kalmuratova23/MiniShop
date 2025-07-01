import { ref, watch, onMounted } from 'vue'

export function useDarkMode(){
    const dark = ref(false)

    watch(dark, (val) => {
        document.body.classList.toggle('dark-theme', val)
        localStorage.setItem('dark', JSON.stringify(val))
    })

    onMounted(() => {
        const saved = localStorage.getItem('dark')
        if(saved) dark.value = JSON.parse(saved)
    })

    const toggle = () => (dark.value = !dark.value)

    return { dark, toggle }
}