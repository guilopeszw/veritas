# Notifications and change history

Implemented 2026-10-21. The sidebar bell opens a modal without replacing the current page. A blue dot and accessible unread count indicate pending updates. Opening the modal does not mark updates read. Visiting an updated content page or expanding its proposal marks related update events read; unrelated events remain unread. There is an explicit mark-all-read control. Updates without content targets open the history and are marked individually. Initial-baseline entries remain in history only.

The footer links to the complete public change history. Notifications show a short description and direct content links; history keeps before/after and reasons. Read state stays in browser storage, with an in-tab fallback if storage is blocked. No server tracking or cross-device sync. A new versioned storage key avoids inheriting the old automatic-on-load seen flags. First use therefore shows existing non-baseline updates as unread.

Validation: reader unit tests cover selective read state and persistence, syntax check and release gates. Mobile popup checked at a 390-pixel viewport, including menu access and direct navigation. No deployment.
