import create from 'zustand';

interface Alert {
  type: 'success' | 'danger';
  message: string;
}

interface AlertStore {
  alerts: Alert[];
  addAlert: (alert: Alert) => void;
  increase: () => void;
}

export const useAlertStore = create<AlertStore>(set => ({
  alerts: [],
  increase: () => set(state => ({ alerts: [] })),
  addAlert: alert =>
    set(state => {
      state.alerts = [...state.alerts, alert];
      return { ...state };
    }),
}));

useAlertStore.subscribe(state => console.log(state.alerts));
