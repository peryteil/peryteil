export default function CardGrid() {
    return (
        <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 bg-white border shadow-md rounded-xl">
                <div className="mb-2 text-4xl">🌱</div>
                <h3 className="mb-1 text-xl font-bold">식물 키우기</h3>
                <p className="text-gray-600 test-sm">식물을 키우며 마음의 평화를 얻어보세요.</p>
            </div>
            
            <div className="p-6 bg-white border shadow-md rounded-xl">
                <div className="mb-2 text-4xl">📅</div>
                <h3 className="mb-1 text-xl font-bold">일정 관리</h3>
                <p className="text-sm text-gray">효율적인 일정 관리를 도와드립니다.</p>
            </div>

            <div className="p-6 bg-white border shadow-md rounded-xl">
                <div className="mb-2 text-4xl">💬</div>
                <h3 className="mb-1 text-xl font-bold">소통 채널</h3>
                <p className="text-sm text-gray-600">팀원과 원활하게 소통해보세요.</p>
            </div>
            
        </div>
        
    )
}