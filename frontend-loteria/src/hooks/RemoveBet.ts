import { useMutation, useQueryClient } from "@tanstack/react-query";

const useDeleteBet = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (betId: number) => {
      const response = await fetch(`https://loteria-backend-o6rd.onrender.com/bet/${betId}`, {
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