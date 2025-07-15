export default function Card() {
    return (
        <div className="max-w-sm mx-auto overflow-hidden border border-gray-200 shadow-lg rounded-2xl">
            <img
                className="object-cover w-full h-48"
                src="https://www.hyundaicard.com/docfiles/resources/mo/images/ben/img_bene_car.png"
                alt="자동차 이미지"
            />

            <div className="p-4">
                <h2 className="text-xl font-bold">홍길동</h2>
                <p className="text-gray-600">Frontend Developer</p>
                <p className="mt-2" text-sm text-gray-700>
                    React와 Tailwind를 배우는 중입니다.
                </p>
            </div>
        </div>
    )
}