export const $t = {
  hitorisskey: 'ひとりすきー',
  channels: 'チャンネル',
  home: 'ホーム',
  announcements: 'お知らせ',
  bottleMail: 'ボトルメール',
  settings: '設定',
  email: 'メールアドレス',
  password: 'パスワード',
  passwordConfirmation: 'パスワード（確認用）',
  register: '登録する',
  reload: '再読み込み',
  about: 'ひとりすきーについて',
  adminTools: '管理ツール',
  underDevelopment: '開発中',
  save: '保存する',
  $welcome: {
    subTitle: 'ひとりがすき。そんなあなたの、匿名ミニブログ。',
    createNew: '新しくはじめる',
    login: 'ログイン',
    $createNew: {
      title: '注意！ひとりすきーを使うのははじめてですか？',
      description: 'すでに他の端末でひとりすきーをご利用の場合、メールアドレスとパスワードを登録していれば、そのアカウントを引き続きこの端末でご利用いただけます。',
      ok: 'それでも新規作成する',
      cancel: 'やっぱり戻る',
    },
    $login: {
      description1: '以前使用していたアカウントのメールアドレスとパスワードを入力してください。',
      description2: 'メールアドレスとパスワードをまだ登録していないのであれば、以前の端末にてひとりすきーにアクセスし、設定画面から登録してください。',
      ok: 'ログイン',
      cancel: 'やっぱり戻る',
    },
  },
  $channels: {
    public: 'みんなのつぶやき',
    private: 'プライベートルーム',
    realtime: 'なう！広場',
    announce: 'お知らせ',
  },
  $channelDescriptions: {
    public: 'このチャンネルでのつぶやきは、誰かのつぶやきと一緒にランダムに表示されます。',
    private: 'このチャンネルでのつぶやきは、あなた以外に表示されません。誰にも見られたくないことを書き残しましょう。',
    realtime: 'このチャンネルには、24時間以内のリアルタイムなつぶやきを投稿できます。今起きていることについて、リアルタイムに会話しましょう。',
  },
  $channelView: {
    noSuchPosts: 'まだつぶやきが投稿されていません。何かつぶやいてみませんか？',
    noSuchAnnouncements: 'お知らせはありません。',
  },
  $postComposerView: {
    annotation: '注釈',
    hideContent: '投稿内容を伏せる',
    placeholder: '好きなことを書きましょう。',
    post: '投稿する',
    posting: '投稿中…',
  },
  $postView: {
    delete: '削除',
    changeVisibility: '公開範囲を変更…',
    report: 'このつぶやきを通報…',
  },
  $settings: {
    display: '表示設定',
    displayDescription: 'テーマ、アクセントカラー、…',
    account: 'アカウント設定',
    accountDescription: 'メールアドレスとパスワードの登録',
    privacy: 'プライバシー設定',
    privacyDescription: 'ワードミュート',
    logout: 'ログアウト',
    logoutDisabled: 'アカウントにメールアドレスを登録していないため、ログアウトできません。',
    initialize: '初期値に戻す',
    $display: {
      alertInfo: 'これらの設定は端末に保存されます。',
      theme: 'テーマ',
      $theme: {
        light: 'ライトテーマ',
        dark: 'ダークテーマ',
        system: 'システム設定に準ずる',
      },
      accentColor: 'アクセントカラー',
      accentColorDescription: 'ボタンやアイコンなど、様々な場所で使われる色を選択します。',
      fontSize: '文字サイズ',
      customCSS: 'カスタムCSS',
      customCSSDescription: 'スタイルシートを記述して、より高度にUIをカスタマイズできます。',
      customCSSWarning: 'CSSに詳しい知識をお持ちでない場合は、本設定を変更しないでください。設定を誤ると、本サービスを正常にご利用いただけなくなります。',
    },
    $account: {
      emailSettings: 'メール設定',
      emailSettingsDescription: 'メールアドレスとパスワードの登録がなくてもひとりすきーをご利用いただけますが、登録することで、他の端末からログインしたり、ブラウザのデータを消去した場合にアカウントを復元したりできます。',
      emailAlreadyRegistered: 'メールアドレスは既に登録されています。',
    },
    $admin: {
      settings: 'サーバー設定',
      invitations: '招待コード',
      reports: '通報',
      punishees: '処罰者管理',
    },
  },
} as const;