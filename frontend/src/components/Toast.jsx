import { useEffect } from "react";

export default function Toast({
    mensagem,
    tipo,
    onClose,
    duracao = 3000
}) {

    useEffect(() => {

        const timer = setTimeout(() => {

            if (onClose) {
                onClose();
            }

        }, duracao);

        return () => clearTimeout(timer);

    }, [onClose, duracao]);

    const estilo = {
        position: "fixed",
        top: "20px",
        right: "20px",
        padding: "15px 20px",
        backgroundColor: tipo === "erro" ? "#fee2e2" : "#dcfce7",
        color: tipo === "erro" ? "#991b1b" : "#166534",
        borderRadius: "8px",
        border:
            tipo === "erro"
                ? "1px solid #f87171"
                : "1px solid #4ade80",
        zIndex: 1000,
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
    };

    return (
        <div style={estilo}>
            {mensagem}
        </div>
    );
}