export async function getServerTimeZone() {
    return new Promise((resolve, reject) => {
        const userId = fsl.context.user.id;
        const objectType = 'User';
        fsl.query.getRecord(userId, objectType, function (res, err) {
            if (err != null) {
                reject(err);
            } else {
                // don't try this at home
                const result =
                    res.records[Object.keys(res.records)[0]].fields[
                        'TimeZoneSidKey'
                    ].value;
                resolve(result);
            }
        });
    });
}

export function getDeviceTimeZone() {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
}
