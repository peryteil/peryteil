export default function DispatchEvent() {
    const onCallDispatchEvent = () => {
        console.log('onCallDispatchEvent')
        document.getElementById('root')?.dispatchEvent(new Event('click',{bubbles:true}))
    }
    const onCallClick = () => {
        console.log('onCallClick')
        document.getElementById('root')?.click()
    }
    return <div>DispatchEvent</div>
}