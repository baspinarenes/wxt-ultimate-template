export async function allSettled<T extends readonly unknown[]>(
  promises: [
    ...{ [K in keyof T]: T[K] extends Promise<any> ? T[K] : T[K] | false }
  ]
): Promise<Partial<{ [K in keyof T]: Awaited<T[K]> }>> {
  const results = await Promise.allSettled(promises as any);

  return results.map((r) => (r.status === "fulfilled" ? r.value : null)) as any;
}
