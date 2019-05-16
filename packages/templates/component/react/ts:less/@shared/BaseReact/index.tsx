import * as React from 'react';
import queryString from 'query-string';
import $api from 'services';
import $store from 'store';
import {$wxshare} from 'lib';

export abstract class BaseReact<P={}, S={}> extends React.Component<P, S> {
  protected readonly $api: any = $api;
  protected readonly $store: any = $store;
  protected readonly $share: any = $wxshare;
  protected readonly $qs: any = queryString;
  public props: any;
}

export abstract class BasePureReact<P={}, S={}> extends React.PureComponent<P, S> {
  protected readonly $api: any = $api;
  protected readonly $store: any = $store;
  protected readonly $share: any = $wxshare;
  protected readonly $qs: any = queryString;
  public props: any;
}

