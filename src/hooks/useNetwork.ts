export interface NetworkState {
  isOnline: boolean;
  isOffline: boolean;
  offlineAt?: number;
  onlineAt?: number;
}

export function useNetwork(): NetworkState {
  return {
    isOnline: true,
    isOffline: false,
    offlineAt: 0,
    onlineAt: 0,
  };
}
