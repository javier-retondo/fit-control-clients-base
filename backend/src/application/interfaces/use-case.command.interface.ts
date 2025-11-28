export interface UseCaseCommandInterface<TRequest, TResponse> {
   execute(request: TRequest): Promise<TResponse>;
}
