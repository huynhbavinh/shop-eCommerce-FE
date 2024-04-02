import { useCallback } from 'react'

export default function useJumpToView() {
    const handleJumpToView = useCallback((id: string) => {
        const releventDiv = document.getElementById(id);
        releventDiv?.scrollIntoView({ behavior: "smooth" });
    }, [])

    return handleJumpToView;
}
