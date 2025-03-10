import { useMutation, useQueryClient } from "@tanstack/react-query";

const API_URL = import.meta.env.VITE_API_URL;

const useDeleteBet = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (betId: number) => {
      const response = await fetch(`${API_URL}/bet/${betId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Erro ao excluir a aposta.");
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bets"] })
      queryClient.invalidateQueries({ queryKey: ["pool"] });
      
    },
  });
};

export default useDeleteBet;