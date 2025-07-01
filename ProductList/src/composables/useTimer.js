import { ref } from 'vue'

export function useTimer(){
    const time = ref(0)
    let interval = null
    const running = ref(false)

    const start = () =>{
        if (running.value) return
        running.value = true
        interval = setInterval(() => {
            time.value++
        }, 1000)
    }

    const stop = () => {
        clearInterval(interval)
        running.value = false
    }

    const reset = () => {
        stop()
        time.value = 0
    }

    return { time, running , start, stop, reset }
}