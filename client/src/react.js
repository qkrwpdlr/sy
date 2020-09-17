const e = React.createElement;
const { useState } = React

const PrograssBarGroup = () => {
    const datas = [[1, "과목", 32], [2, "과목", 55], [3, "과목", 100], [4, "과목", 23], [5, "과목", 30]].map(e => {
        return {
            id: e[0],
            title: e[1],
            prograss: e[2]
        }
    })
    return <div style={{ height: '100%', display: "flex", flexDirection: "column", justifyContent: "center" }}>
        {datas.map(({ title, prograss, id }) => {
            return <PrograssBar title={title} prograss={prograss} key={id} />
        })}
    </div>
}
const PrograssBar = ({ title, prograss }) => {
    const [isHover, setHover] = useState(false)
    return (
        <div
            onMouseEnter={() => { setHover(true) }}
            onMouseLeave={() => { setHover(false) }}
            style={
                {
                    width: '100%',
                    height: '50px',
                    backgroundColor: "rgb(10,255,10)",
                    marginTop: '10px',
                    marginBottom: '10px',
                    borderRadius: '10px',
                    cursor: "pointer"
                }}
        >
            <div style={{
                width: `${prograss}%`,
                height: '100%',
                backgroundColor: "rgb(255,255,50)",
                borderRadius: '10px',
                display: "flex",
                justifyContent: 'center',
                alignItems: "center"
            }}>
                <span
                    style={{
                        color: "black",
                        fontSize: "20px"
                    }}
                    hidden={!isHover}
                >
                    {title}
                </span>
            </div>
        </div >
    );
}


ReactDOM.render(e(PrograssBarGroup), document.getElementById("prograss__bar"))