import { Component, createEffect, createMemo, createSignal, onMount, Show } from "solid-js";

import { api } from "../../api";
import { Post } from "../../api/models/post";
import { MenuDefinition } from "../../misc/menu-definition";
import { openMenu } from "../../store/popup-menu";
import { $t } from "../../text";
import { FormattedTextView } from "./primitives/formatted-text-view";
import { ReactionPickerView } from "./reaction-picker-view";

export type PostProp = {
  post: Post;
};

export const PostView: Component<PostProp> = (p) => {
  const [isVisibleReactionPicker, setVisibleReactionPicker] = createSignal(false);
  let reactionButtonRef: HTMLElement | undefined = undefined;

  const [reactionViewLocation, setReactionViewLocation] = createSignal([0, 0]);

  const body = () => <FormattedTextView children={p.post.content}/>;

  const menu = () => {
    const m: MenuDefinition = [];
    if (p.post.isMine) {
      m.push({
        items: [{
          label: $t.$postView.delete,
          danger: true,
          iconClass: 'fas fa-trash-alt fa-fw',
          onClick() {
            api.post.deleteAsync(p.post.id);
          },
        }, {
          label: $t.$postView.changeVisibility,
          iconClass: 'fas fa-lock fa-fw',
          disabled: true,
        }]
      });
    }
    m.push({
      items: [{
        label: $t.$postView.report,
        iconClass: 'fas fa-exclamation-circle fa-fw',
        onClick() {
          alert('wip');
        },
      }]
    })
    return m;
  }; 

  const onClickReact = (e: MouseEvent) => {
    setVisibleReactionPicker(true);
  };

  const onClickMore = (e: MouseEvent) => {
    openMenu(menu(), e.currentTarget as HTMLElement);
  };

  onMount(() => {
    if (!reactionButtonRef) return;
    const rect = reactionButtonRef.getBoundingClientRect();
    setReactionViewLocation([rect.left, rect.bottom + 8]);
  });

  return (
    <div class="card hs-post">
      <div class="body">
        <Show when={p.post.annotation} fallback={body()}>
          <details>
            <summary><FormattedTextView inline children={p.post.annotation} /></summary>
            {body()}
          </details>
        </Show>
        <div class="hstack mt-2">
          <button ref={reactionButtonRef} class="btn flat" onClick={onClickReact}>
            <i class="far fa-face-smile"></i>
          </button>
          <button class="btn flat" onClick={onClickMore}>
            <i class="fas fa-ellipsis"></i>
          </button>
        </div>
      </div>
      <ReactionPickerView
        x={reactionViewLocation()[0]}
        y={reactionViewLocation()[1]}
        show={isVisibleReactionPicker()}
        onClose={() => setVisibleReactionPicker(false)}
        onChoose={(e) => {
          setVisibleReactionPicker(false);
          console.log(e);
        }}
        />
    </div>
  );
};
