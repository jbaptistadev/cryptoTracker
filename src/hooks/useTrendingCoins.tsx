import {useEffect, useState} from 'react';
import TrendingCryptoApi from '../api/TrendingCryptoApi';
import {
  TrendingCurrencyResponse,
  Usd,
} from '../interfaces/apiCurrencyTrendingInterface';

export const useTrendingCoins = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [state, setState] = useState<TrendingCurrencyResponse | null>();
  const [currentCurrency, setCurrentCurrency] = useState<Usd | null>();

  const getAll =
    '/data/pricemultifull?fsyms=BTC,ETH,XRP,BCH,ADA,LTC,XEM,XLM,EOS,NEO,MIOTA,DASH,XMR,TRX,XTZ,DOGE,ETC,VEN,USDT,BN&tsyms=USD&api_key=1b347829f74d52e9bd57a3434b5577af606c39341a64d02e31c1dbe650991c44';

  const getInfoCurrency = async (currencyID: string) => {
    try {
      const trendingCoinsResponse =
        await TrendingCryptoApi.get<TrendingCurrencyResponse>(
          `/data/pricemultifull?fsyms=${currencyID}&tsyms=USD&api_key=1b347829f74d52e9bd57a3434b5577af606c39341a64d02e31c1dbe650991c44`,
        );
      setCurrentCurrency(trendingCoinsResponse.data.RAW[currencyID].USD);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const getTrendingCoins = async () => {
      try {
        const trendingCoinsResponse =
          await TrendingCryptoApi.get<TrendingCurrencyResponse>(getAll);
        setState(trendingCoinsResponse.data);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getTrendingCoins();
  }, []);
  return {
    isLoading,
    isError,
    CryptoList: state?.RAW ? Object.values(state.RAW) : [],
    currentCurrency,
    getInfoCurrency,
  };
};
