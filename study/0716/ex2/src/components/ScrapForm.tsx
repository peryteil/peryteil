type LoginInfo = { name: string; carNum: string };

export default function ScrapForm({ name, carNum }: LoginInfo) {
    return (
        <div className="p-4 bg-white border rounded shadow">
            <h2 className="font-semibold">{name}</h2>
            <label htmlFor="name">이름</label>
            <input id="name" type="text" value={name} />
            <label htmlFor="carNum">차량번호</label>
            <input id="carNum" type="text" value={carNum} />
        </div>
    );
} 