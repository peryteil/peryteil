import { Title, Subtitle } from "../components"
import * as D from '../data';

export default function AlignTest() {
    const boxes = D.range(0, 5).map(index => {
        return <div key = {index} className="w-4 h-4 m-1 bg-black" />
    })
    const boxesForStretch = ['justift-start', 'justify-center',]
    return (
    <section className="mt-4">
        <Title>AlignTest</Title>
        <div className="mt-4"></div>
    </section>
    );
}