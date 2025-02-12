import { useMutation, useQueryClient } from "@tanstack/react-query";

const useDeleteBet = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (betId: number) => {
      const response = await fetch(`http://localhost:8080/bet/${betId}`, {
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