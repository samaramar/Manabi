export default function Modal({
    aberto,
    titulo,
    mensagem,
    children,
    onClose
}) {

    if (!aberto) {
        return null;
    }

    return (
        <div style={overlay}>
            <div style={modal}>

                <h2>{titulo}</h2>

                <p>{mensagem}</p>

                {children}

            </div>
        </div>
    );
}

const overlay = {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(0,0,0,.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999
};

const modal = {
    background: "#fff",
    borderRadius: "10px",
    padding: "25px",
    width: "400px",
    maxWidth: "90%"
};