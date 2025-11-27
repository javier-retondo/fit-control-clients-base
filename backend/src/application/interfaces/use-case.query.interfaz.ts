export interface UseCaseQuery<TRequest, TResponse> {
   execute(request: TRequest): Promise<TResponse>;
}
