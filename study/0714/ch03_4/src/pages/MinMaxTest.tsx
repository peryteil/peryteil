import {Div, Title } from "../components"
import * as D from '../data';

export default function MinMaxTest() {
    return (
    <section className="mt-4">
        <Title>MinMaxTest</Title>
        <Div className="p-4 bg-gray-300"></Div>
        <Div src={D.randomImage(800, 300)} className="bg-cover">
            <Div>
                
            </Div>
            
        </Div>
    </section>
    );
}