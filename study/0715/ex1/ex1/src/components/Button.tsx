export default function ButtonGroup() {
    return (
        <div className="flex justify-center gap-4 mt-8">
            <button className="px-6 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600" >
                홈
            </button>
            <button className="px-6 py-2 font-semibold text-white bg-green-500 rounded hover:bg-green-600">
                소개
            </button>
            <button className="px-6 py-2 font-semibold text-white bg-purple-600 rounded">
                연락
            </button>
        </div>
        
    )
}