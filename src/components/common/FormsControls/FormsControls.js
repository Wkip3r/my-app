import styles from "./FormsControls.module.css"

export const Element = (Element) => ({input,meta, ...props}) => {
    const hasError = meta.touched && meta.error

    return (
        <div className={hasError ? styles.formControlError : ""}>
            <div>
                <Element {...input} {...props} />
            </div>
            <div>
                {hasError ? <span>{meta.error}</span> : null}
            </div>

        </div>
    )
}