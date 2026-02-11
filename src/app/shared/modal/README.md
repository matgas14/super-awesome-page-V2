# ModalComponent

A reusable modal component for Angular.

## Inputs
- `title: string` — Modal title
- `content: string` — Modal content

## Output
- `close: EventEmitter<void>` — Emits when modal is closed

## Usage Example
```
<app-modal [title]="'Results:'" [content]="timeWastedText" (close)="closeModal()"></app-modal>
```
